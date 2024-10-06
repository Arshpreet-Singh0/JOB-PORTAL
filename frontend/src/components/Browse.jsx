import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSerachQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';


const Browse = () => {
    useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    useEffect(()=>{
        return ()=>{
            dispatch(setSerachQuery(""));
        }
    },[])

  return (
    <div>
        <Navbar />

        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
            <div className='grid grid-cols-3 gap-4'>

            {
                allJobs.length>0 && allJobs.map((job,idx)=>{
                    return (
                        <Job job={job} key={job._id}/>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Browse