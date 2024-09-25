import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { Button, Flex, SimpleGrid, Spinner, Collapse, Text, Box } from '@chakra-ui/react';
import { MdCancel } from "react-icons/md";
import CreateEvent from './CreateEvent';
import DeleteButton from './DeleteButton';
import { Context } from '../../context/Context';
import useToast from "../../hooks/useToast";

const Events = () => {
  const { showSuccess, showError } = useToast();
  const { user, setTotalEvents } = useContext(Context);
  const token = user.token;

  const [events, setEvents] = useState([]);
  const [eventLoading, setEventLoading] = useState(false);
  const [collapseState, setCollapseState] = useState([]);
  const [deleteActivate, setDeleteActive] = useState(false);

  const handleToggle = (index) => {
    setCollapseState(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleDelete = async (e, event) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/event/${event._id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = res.data;

      if (data.error) {
        showError(data.error);
        return;
      }

      setEvents(prev => prev.filter(item => item._id !== event._id));
      setTotalEvents(prev => {
        localStorage.setItem("totalEvents", prev - 1);
        return prev - 1;
      });

      showSuccess(data.success);
    } catch (err) {
      showError(err.message);
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      setEventLoading(true);
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/events`);
        const data = res.data;
        setEvents(data.events);
        setTotalEvents(data.events.length);
        localStorage.setItem("totalEvents", data.events.length);

        // Initialize collapse state
        setCollapseState(new Array(data.events.length).fill(false));
      } catch (err) {
        showError(err.message);
      } finally {
        setEventLoading(false);
      }
    };

    fetchEvents();
  }, [showError, setTotalEvents]);

  if (eventLoading) {
    return (
      <Flex h="50px" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <div className="scroller h-[100%] w-[100%] md:w-[80vw] box-border">
      {/* Delete Button */}
      <div className="flex justify-end w-[100%] transition-all duration-500 mt-2">
        <DeleteButton setDeleteActivate={setDeleteActive} />
      </div>

      {/* Event Grid */}
      <div className="w-[100%] flex justify-center items-center mt-2">
        <SimpleGrid boxSizing="border-box" p="10px" w={{ base: "70%", md: "60%", lg: "100%" }} minChildWidth="250px" spacing="20px">
          {events.map((event, index) => (
            <Box key={event._id} bg="white" w="100%" maxW="400px" shadow="md" className="transition-all duration-500 flex flex-col justify-center items-center">
              {/* Delete Icon */}
              <Box className={`${deleteActivate ? "inline" : "hidden"} w-[100%] flex transition-all duration-500`}>
                <MdCancel
                  onClick={(e) => handleDelete(e, event)}
                  cursor="pointer"
                  size="25px"
                  className="ml-auto transition-all duration-500 hover:text-red-500"
                />
              </Box>

              {/* Event Image */}
              <Box w="100%" h="220px" display="flex" justifyContent="center" alignItems="center">
                <img src={event.img} alt={event.img} className="h-[100%] w-[100%] object-cover" />
              </Box>

              {/* Event Details */}
              <Box position="relative" top="-20px" p="20px" w="95%" bg="white">
                <Text fontSize={{ base: "18px", lg: "25px" }} color="gray.400">
                  {event.title}
                </Text>

                <Flex gap="8px" color="gray.600" fontSize={{ base: "12px", lg: "15px" }}>
                  <span>{event.eventDate.day}</span>
                  <span>{event.eventDate.month}</span>
                  <span>{event.eventDate.year}</span>
                </Flex>

                <Flex gap="8px" color="gray.500" fontSize={{ base: "12px", md: "15px" }}>
                  <span>{event.startTime.timeValHour}:{event.startTime.timeValMinute}</span>
                  <span>-</span>
                  <span>{event.endTime.timeValHour}:{event.endTime.timeValMinute}</span>
                </Flex>

                {/* Collapsible Description */}
                <Box className={`scroller overflow-scroll ${collapseState[index] ? "h-auto" : "max-h-[120px]"}`}>
                  <Text fontSize={{ base: "md", lg: "xl" }} color="gray.400" fontWeight="500">{event.venue}</Text>
                  <Collapse startingHeight={20} in={collapseState[index]}>
                    <Text fontSize={{ base: "14px", md: "16px" }}>{event.desc}</Text>
                  </Collapse>
                  <Button size="sm" mt="1rem" onClick={() => handleToggle(index)}>
                    Show {collapseState[index] ? "Less" : "More"}
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </div>

      {/* Create Event Component */}
      <CreateEvent setTotalEvents={setTotalEvents} setEvents={setEvents} />
    </div>
  );
};

export default Events;
