import React, { useContext, useEffect, useState } from 'react';
import { Flex, Collapse, Button } from '@chakra-ui/react';
import DeleteButton from './DeleteButton';
import { MdCancel } from 'react-icons/md';
import axios from 'axios';
import CreateCause from './CreateCause';
import { Context } from '../../context/Context';
import useToast from "../../hooks/useToast";

const Causes = () => {
  const { showSuccess, showError } = useToast();
  const { user, totalCauses, setTotalCauses } = useContext(Context);
  const token = user.token;

  const [deleteActive, setDeleteActivate] = useState(false);
  const [causes, setCauses] = useState([]);
  const [collapseState, setCollapseState] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/cause`);
        const data = res.data;

        if (data.error) {
          showError(data.error);
          return;
        }

        setCauses(data.causes);
        localStorage.setItem("totalCauses", data.causes.length);
      } catch (err) {
        showError(err.message);
      }
    })();
  }, [showError]);

  const handleToggle = (index) => {
    setCollapseState((prev) => {
      let newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleDelete = async (e, cause) => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/cause/${cause._id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = res.data;
      if (data.error) {
        showError(data.error);
        return;
      }

      setCauses((prev) => prev.filter((p) => p._id !== cause._id));
      setTotalCauses((prev) => {
        localStorage.setItem("totalCauses", prev - 1);
        return prev - 1;
      });

      showSuccess(data.success);
    } catch (err) {
      showError(err.message);
    }
  };

  return (
    <>
      <div className='scroller w-[100%] p-2 relative h-[100%] gap-[20px] overflow-scroll'>
        {causes.length > 0 && (
          <>
            {/* Delete Button */}
            <div className='flex justify-end w-[100%] transition-all duration-500'>
              <DeleteButton setDeleteActivate={setDeleteActivate} />
            </div>

            {/* Causes List */}
            <div className='flex justify-center transition-all duration-500'>
              <Flex
                transition='all 0.3s ease-in-out'
                w={{ base: '70%', md: '100%' }}
                mt='20px'
                flexWrap='wrap'
                gap='20px'
                justifyContent='center'
                alignItems='center'
              >
                {causes.map((blog, index) => (
                  <div key={index} className='bg-white transition-all duration-500 w-[100%] flex flex-col justify-center items-center max-w-[300px] shadow-md'>
                    {/* Delete Icon */}
                    <div className={`${deleteActive ? 'inline' : 'hidden'} w-[100%] flex transition-all duration-500`}>
                      <MdCancel
                        onClick={(e) => handleDelete(e, blog)}
                        cursor='pointer'
                        size='25px'
                        className='ml-auto transition-all duration-500 hover:text-red-500'
                      />
                    </div>

                    {/* Image */}
                    <div className='transition-all duration-500 w-[100%] flex justify-center items-center h-[150px] md:h-[190px] lg:max-h-[220px] object-fill'>
                      <img className='h-[100%] w-[100%]' src={blog.img} alt={blog.img} />
                    </div>

                    {/* Details */}
                    <div className='relative transition-all duration-500 -top-[20px] p-[12px] flex-1 bg-white w-[95%]'>
                      <div className='text-gray-400'>
                        <h1 className='lg:text-[25px] text-[18px]'>{blog.title}</h1>
                      </div>

                      <div className={`scroller overflow-scroll ${collapseState[index] ? 'h-auto' : 'max-h-[100px]'}`}>
                        <Collapse startingHeight={20} in={collapseState[index]}>
                          <p className='text-[14px] md:text-[16px]'>{blog.desc}</p>
                        </Collapse>
                        <Button size='sm' onClick={() => handleToggle(index)} mt='1rem'>
                          Show {collapseState[index] ? 'Less' : 'More'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </Flex>
            </div>
          </>
        )}

        {/* Create Cause */}
        <CreateCause causes={causes} setCauses={setCauses} setTotalCauses={setTotalCauses} />
      </div>
    </>
  );
};

export default Causes;
