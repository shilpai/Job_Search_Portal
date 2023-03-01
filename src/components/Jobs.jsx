import React from 'react'
import {motion} from 'framer-motion'
import Job from './Job'

export default function Jobs({jobs, changeOpen}) {
  return (
    <div className="jobs side-gap">
        <motion.ul layout>
          {jobs.map((item, index) => (
            <motion.li animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} layout key={item.jobId}>
              <Job item={item} index={index} changeOpen={changeOpen} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
  )
}
