/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NextPage } from 'next'

import { useAppDispatch } from '@/hooks/stores'
import { add, edit } from '@/stores/infoSlice'
import { EditInfoType } from '@/types'

interface FormType {
  title: string
  address: string
  name: string
  job: string
  email: string
  phone: string
}
interface Prop {
  onSetItem: () => void
  setToastStatus: () => void
  selectedData: EditInfoType | null
}
const Form: NextPage<Prop> = ({ onSetItem, selectedData, setToastStatus }) => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState, setValue } = useForm<FormType>({
    mode: 'all',
  })
  const [formType, setFormType] = useState(true)
  useEffect(() => {
    if (!selectedData) return
    setValue('address', selectedData.data.address)
    setValue('name', selectedData.data.name)
    setValue('title', selectedData.data.title)
    setValue('job', selectedData.data.job)
    setValue('phone', selectedData.data.phone)
    setValue('email', selectedData.data.email)
    setFormType(false)
  }, [selectedData, setValue])

  const { errors, isValid } = formState
  const onSubmit = (data: any) => {
    if (formType) dispatch(add(data))
    if (!formType) dispatch(edit({ data, id: selectedData?.id }))
    onSetItem()
    setToastStatus()
  }
  const resetField = () => {
    setValue('address', '')
    setValue('name', '')
    setValue('title', '')
    setValue('job', '')
    setValue('phone', '')
    setValue('email', '')
    setFormType(false)
  }
  const isAllowed =
    isValid &&
    errors.title === undefined &&
    errors.address === undefined &&
    errors.name === undefined &&
    errors.job === undefined &&
    errors.email === undefined &&
    errors.phone === undefined
  return (
    <div className=' mt-12 border rounded-lg px-6 pt-4 pb-8 w-sm  bg-white shadow '>
      <div className='flex justify-center'>
        <div className='font-bold not-italic text-info w-full'>{formType ? 'New Location' : 'Edit Location'}</div>
        <div
          className='flex justify-center items-center text-info cursor-pointer'
          onClick={() => {
            onSetItem()
            resetField()
          }}
        >
          <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 13L13 1L1 13ZM1 1L13 13L1 1Z' fill='#989EA7' />
            <path d='M1 1L13 13M1 13L13 1L1 13Z' stroke='#989EA7' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='group'>
        <div className='flex flex-col mt-10 '>
          <div className='flex gap-1'>
            <span className='font-normal not-italic text-4xl text-info'>Title</span>
            <span className='font-normal not-italic text-4xl text-success'>*</span>
          </div>
          <div className='relative'>
            <input
              type='text'
              {...register('title', {
                required: 'Please enter a valid title',
                minLength: {
                  value: 1,
                  message: 'Please enter a valid title',
                },
              })}
              name='title'
              id='title'
              className={`shadow-primary w-md mt-0.5 h-min ${
                errors.title ? 'border-warning' : 'border-primary'
              } border border-solid rounded-md focus:outline-none focus:border focus:border-secondary text-4xl text-info font-normal pl-3`}
              placeholder='Headquaters'
            />
            {errors.title && (
              <div className='absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none'>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM9 12C9 12.2652 8.89464 12.5196 8.70711 12.7071C8.51957 12.8946 8.26522 13 8 13C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11C8.26522 11 8.51957 11.1054 8.70711 11.2929C8.89464 11.4804 9 11.7348 9 12ZM8 3C7.73478 3 7.48043 3.10536 7.29289 3.29289C7.10536 3.48043 7 3.73478 7 4V8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V4C9 3.73478 8.89464 3.48043 8.70711 3.29289C8.51957 3.10536 8.26522 3 8 3Z'
                    fill='#FF7B92'
                  />
                </svg>
              </div>
            )}
          </div>
          {errors.title && <span className='mt-2 text-sm text-warning '>Please enter a valid title</span>}
        </div>
        <div className='flex flex-col mt-6'>
          <div className='flex gap-1'>
            <span className='font-normal not-italic text-4xl text-info'>Address</span>
            <span className='font-normal not-italic text-4xl text-success'>*</span>
          </div>
          <div className='relative'>
            <input
              type='text'
              {...register('address', {
                required: 'Please enter a valid address',
                minLength: {
                  value: 1,
                  message: 'Please enter a valid address',
                },
              })}
              name='address'
              id='address'
              className={`shadow-primary w-md mt-0.5 h-min ${
                errors.address ? 'border-warning' : 'border-primary'
              } border border-solid rounded-md focus:outline-none focus:border focus:border-secondary text-4xl text-info font-normal pl-3`}
              placeholder='3763 W. Dallas'
            />
            {errors.address && (
              <div className='absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none'>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM9 12C9 12.2652 8.89464 12.5196 8.70711 12.7071C8.51957 12.8946 8.26522 13 8 13C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11C8.26522 11 8.51957 11.1054 8.70711 11.2929C8.89464 11.4804 9 11.7348 9 12ZM8 3C7.73478 3 7.48043 3.10536 7.29289 3.29289C7.10536 3.48043 7 3.73478 7 4V8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V4C9 3.73478 8.89464 3.48043 8.70711 3.29289C8.51957 3.10536 8.26522 3 8 3Z'
                    fill='#FF7B92'
                  />
                </svg>
              </div>
            )}
          </div>
          {errors.address && <span className='mt-2 text-sm text-warning '>Please enter a valid address</span>}
        </div>
        <div className='mt-8'>
          <div className='tracking-wide font-normal not-italic text-5xl text-primary'>CONTACT INFORMATION</div>
        </div>
        <div className='flex mt-4 w-full text-info'>
          <svg width='270' height='1' viewBox='0 0 270 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <line y1='0.5' x2='270' y2='0.5' stroke='#E8EDF3' />
          </svg>
        </div>
        <div className='flex flex-col mt-6'>
          <div className='flex gap-1'>
            <span className='font-normal not-italic text-4xl text-info'>Full Name</span>
            <span className='font-normal not-italic text-4xl text-success'>*</span>
          </div>
          <div className='relative'>
            <input
              type='text'
              {...register('name', {
                required: 'Please enter a valid name',
                minLength: {
                  value: 1,
                  message: 'Please enter a valid name',
                },
              })}
              name='name'
              id='name'
              className={`shadow-primary w-md mt-0.5 h-min ${
                errors.name ? 'border-warning' : 'border-primary'
              } border border-solid rounded-md focus:outline-none focus:border focus:border-secondary text-4xl text-info font-normal pl-3`}
              placeholder='Boza'
            />
            {errors.name && (
              <div className='absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none'>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM9 12C9 12.2652 8.89464 12.5196 8.70711 12.7071C8.51957 12.8946 8.26522 13 8 13C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11C8.26522 11 8.51957 11.1054 8.70711 11.2929C8.89464 11.4804 9 11.7348 9 12ZM8 3C7.73478 3 7.48043 3.10536 7.29289 3.29289C7.10536 3.48043 7 3.73478 7 4V8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V4C9 3.73478 8.89464 3.48043 8.70711 3.29289C8.51957 3.10536 8.26522 3 8 3Z'
                    fill='#FF7B92'
                  />
                </svg>
              </div>
            )}
          </div>
          {errors.name && <span className='mt-2 text-sm text-warning '>Please enter a valid name</span>}
        </div>
        <div className='flex flex-col mt-6'>
          <div className='flex gap-1'>
            <span className='font-normal not-italic text-4xl text-info'>Job</span>
            <span className='font-normal not-italic text-4xl text-success'>*</span>
          </div>
          <div className='relative'>
            <input
              type='text'
              {...register('job', {
                required: 'Please enter a valid job',
                minLength: {
                  value: 1,
                  message: 'Please enter a valid job',
                },
              })}
              name='job'
              id='job'
              className={`shadow-primary w-md mt-0.5 h-min ${
                errors.job ? 'border-warning' : 'border-primary'
              } border border-solid rounded-md focus:outline-none focus:border focus:border-secondary text-4xl text-info font-normal pl-3`}
              placeholder='Frontend Developer'
            />
            {errors.job && (
              <div className='absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none'>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM9 12C9 12.2652 8.89464 12.5196 8.70711 12.7071C8.51957 12.8946 8.26522 13 8 13C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11C8.26522 11 8.51957 11.1054 8.70711 11.2929C8.89464 11.4804 9 11.7348 9 12ZM8 3C7.73478 3 7.48043 3.10536 7.29289 3.29289C7.10536 3.48043 7 3.73478 7 4V8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V4C9 3.73478 8.89464 3.48043 8.70711 3.29289C8.51957 3.10536 8.26522 3 8 3Z'
                    fill='#FF7B92'
                  />
                </svg>
              </div>
            )}
          </div>
          {errors.job && <span className='mt-2 text-sm text-warning '>Please enter a valid job position</span>}
        </div>
        <div className='flex flex-col mt-6'>
          <div className='flex gap-1'>
            <span className='font-normal not-italic text-4xl text-info'>Email</span>
            <span className='font-normal not-italic text-4xl text-success'>*</span>
          </div>
          <div className='relative'>
            <input
              type='email'
              {...register('email', {
                required: 'Please enter a valid email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Please enter a valid email',
                },
              })}
              name='email'
              id='email'
              className={`shadow-primary w-md mt-0.5 h-min ${
                errors.email ? 'border-warning' : 'border-primary'
              } border border-solid rounded-md focus:outline-none focus:border focus:border-secondary text-4xl text-info font-normal pl-3`}
              placeholder='name@example.com'
            />
            {errors.email && (
              <div className='absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none'>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM9 12C9 12.2652 8.89464 12.5196 8.70711 12.7071C8.51957 12.8946 8.26522 13 8 13C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11C8.26522 11 8.51957 11.1054 8.70711 11.2929C8.89464 11.4804 9 11.7348 9 12ZM8 3C7.73478 3 7.48043 3.10536 7.29289 3.29289C7.10536 3.48043 7 3.73478 7 4V8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V4C9 3.73478 8.89464 3.48043 8.70711 3.29289C8.51957 3.10536 8.26522 3 8 3Z'
                    fill='#FF7B92'
                  />
                </svg>
              </div>
            )}
          </div>
          {errors.email && <span className='mt-2 text-sm text-warning '>Please enter a valid email</span>}
        </div>
        <div className='flex flex-col mt-6'>
          <div className='flex gap-1'>
            <span className='font-normal not-italic text-4xl text-info'>Phone</span>
            <span className='font-normal not-italic text-4xl text-success'>*</span>
          </div>
          <div className='relative'>
            <input
              type='text'
              {...register('phone', {
                required: 'Please enter a valid phone number',
                pattern: {
                  value: /^\(\d{3}\) \d{3}-\d{4}$/,
                  message: 'Please enter a valid phone number',
                },
              })}
              name='phone'
              id='phone'
              className={`shadow-primary w-md mt-0.5 h-min ${
                errors.phone ? 'border-warning' : 'border-primary'
              } border border-solid rounded-md focus:outline-none focus:border focus:border-secondary text-4xl text-info font-normal pl-3`}
              placeholder='(123) 456-7890'
            />
            {errors.phone && (
              <div className='absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none'>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM9 12C9 12.2652 8.89464 12.5196 8.70711 12.7071C8.51957 12.8946 8.26522 13 8 13C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11C8.26522 11 8.51957 11.1054 8.70711 11.2929C8.89464 11.4804 9 11.7348 9 12ZM8 3C7.73478 3 7.48043 3.10536 7.29289 3.29289C7.10536 3.48043 7 3.73478 7 4V8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V4C9 3.73478 8.89464 3.48043 8.70711 3.29289C8.51957 3.10536 8.26522 3 8 3Z'
                    fill='#FF7B92'
                  />
                </svg>
              </div>
            )}
          </div>
          {errors.phone && <span className='mt-2 text-sm text-warning '>Please enter a valid phone number</span>}
        </div>
        <button
          type='submit'
          disabled={!isAllowed}
          className='mt-6 border rounded-md px-6 py-2 bg-secondary  font-normal not-italic text-2xl text-white disabled:opacity-50 disabled:bg-warning'
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default Form
