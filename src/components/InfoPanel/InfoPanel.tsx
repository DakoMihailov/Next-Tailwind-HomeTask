/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */

import React, { useState } from 'react'
import { NextPage } from 'next'
import { Disclosure, Transition } from '@headlessui/react'

import { useAppDispatch } from '@/hooks/stores'
import { remove } from '@/stores/infoSlice'

type DataType = {
  title: string
  address: string
  name: string
  job: string
  email: string
  phone: string
}

interface Prop {
  data: DataType
  id: number
  onSetItemForRemove: () => void
  onSetItemForEdit: () => void
}
const InfoPanel: NextPage<Prop> = ({ data, id, onSetItemForRemove, onSetItemForEdit }) => {
  const dispatch = useAppDispatch()

  const [isActive, setIsActive] = useState(false)
  const onAccordianClick = () => {
    setIsActive(!isActive)
  }
  const onRemove = () => {
    dispatch(remove({ id }))
  }

  return (
    <div className='flex flex-col mt-primary border rounded-lg w-sm h-auto bg-white shadow'>
      <div
        className={`flex flex-row ${
          isActive ? 'bg-info' : 'bg-white'
        } rounded-t-lg w-sm h-md shadow px-6 py-6 gap-4 cursor-pointer ease-out duration-1000`}
        onClick={onAccordianClick}
      >
        <div className='w-full'>
          <div className={`not-italic font-bold  text-3xl ${isActive ? 'text-white ' : 'text-info'}`}>{data.title}</div>
          <div className={`ont-normal not-italic ${isActive ? 'text-white' : 'text-success'} text-2xl`}>
            {data.address}
          </div>
        </div>
        <div className='flex justify-center items-center cursor-pointer'>
          {isActive ? (
            <svg width='18' height='10' viewBox='0 0 18 10' fill='none' xmlns='http://www.w3.org/2000/svg '>
              <path d='M17 9L9 1L1 9' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          ) : (
            <svg width='18' height='10' viewBox='0 0 18 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M1 1L9 9L17 1' stroke='#33A6BA' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          )}
        </div>
      </div>
      <Disclosure as='div' defaultOpen={false}>
        <>
          <Transition
            show={isActive}
            className='overflow-hidden'
            enter='transition transition-[max-height] duration-500 ease-in'
            enterFrom='transform max-h-0'
            enterTo='transform max-h-screen'
            leave='transition transition-[max-height] duration-500 ease-out'
            leaveFrom='transform max-h-screen'
            leaveTo='transform max-h-0'
          >
            <Disclosure.Panel>
              <div className='pb-6'>
                <div className='flex mt-6 mx-8 w-full font-bold not-italic text-6xl text-info'>{data.title}</div>
                <div className='flex mt-2 mx-8 w-full font-normal not-italic text-4xl text-info'>{data.address}</div>
                <div className='flex mt-2 mx-8 w-full font-normal not-italic text-4xl text-primary'>{data.email}</div>
                <div className='flex mt-2 mx-8 w-full font-normal not-italic text-4xl text-info'>{data.phone}</div>
                <div className='flex mt-4 mx-8 w-full text-info'>
                  <svg width='254' height='1' viewBox='0 0 254 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <line y1='0.5' x2='254' y2='0.5' stroke='#E8EDF3' />
                  </svg>
                </div>
                <div className='flex mt-4 mx-8 justify-between'>
                  <div className='flex flex-row gap-2 cursor-pointer' onClick={onSetItemForEdit}>
                    <div>
                      <svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M13.232 3.23199L16.768 6.76799M14.732 1.73199C15.2009 1.26309 15.8369 0.999664 16.5 0.999664C17.1631 0.999664 17.7991 1.26309 18.268 1.73199C18.7369 2.2009 19.0003 2.83687 19.0003 3.49999C19.0003 4.16312 18.7369 4.79909 18.268 5.26799L4.5 19.036H1V15.464L14.732 1.73199Z'
                          stroke='#989EA7'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='flex justify-center items-center text-5xl'>EDIT</div>
                  </div>
                  <div
                    className='flex flex-row gap-2 cursor-pointer'
                    onClick={() => {
                      onRemove()
                      onSetItemForRemove()
                    }}
                  >
                    <div>
                      <svg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M7 9V15M11 9V15M1 5H17M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5H16ZM12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5H12Z'
                          stroke='#FF7B92'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='flex justify-center items-center text-5xl text-warning'>DELETE</div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      </Disclosure>
    </div>
  )
}

export default InfoPanel
