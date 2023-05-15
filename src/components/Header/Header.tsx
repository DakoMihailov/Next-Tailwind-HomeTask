/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from 'next'

interface Prop {
  setToastStatus: () => void
}
const Header: NextPage<Prop> = ({ setToastStatus }) => (
  <div className='fixed flex flex-row justify-between items-center border-top border-t-2 border-secondary h-rd shadow ease-out duration-300 w-full'>
    <div className='w-full flex justify-center'>
      <div className='flex justify-between items-center gap-4'>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M5 13L9 17L19 7' stroke='#33A6BA' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
        <div className='font-normal font-5xl font-info' role='maintext'>
          The Location has been updated
        </div>
      </div>
    </div>
    <div className='mr-8 cursor-pointer' onClick={setToastStatus}>
      <svg width='15' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M1.16406 13L13.4928 1L1.16406 13ZM1.16406 1L13.4928 13L1.16406 1Z' fill='#989EA7' />
        <path
          d='M1.16406 1L13.4928 13M1.16406 13L13.4928 1L1.16406 13Z'
          stroke='#989EA7'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  </div>
)

export default Header
