/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from 'next'

interface Prop {
  onSetItem: () => void
}
const AddLocationButton: NextPage<Prop> = ({ onSetItem }) => (
  <div
    className='flex justify-center mt-12 rounded-lg px-6 py-4 gap-6 w-sm h-sm bg-secondary shadow ease-out duration-300 cursor-pointer'
    onClick={onSetItem}
  >
    <div className='font-normal not-italic text-secondary w-full'>Add New Location</div>
    <div className='flex justify-center items-center '>
      <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <line x1='9' y1='5.37286e-08' x2='9' y2='16' stroke='white' />
        <line x1='16.5' y1='8.5' x2='0.5' y2='8.5' stroke='white' />
      </svg>
    </div>
  </div>
)

export default AddLocationButton
