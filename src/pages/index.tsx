/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import { NextPage } from 'next'

import AddItemForm from '@/components/AddItem/AddItem'
import AddLocationButton from '@/components/AddLocationButton/AddLocationButton'
import EditItemForm from '@/components/EditItemForm/EditItemForm'
import Header from '@/components/Header/Header'
import InfoPanel from '@/components/InfoPanel/InfoPanel'
import { useAppSelector } from '@/hooks/stores'
import type { AddInfoType, EditInfoType } from '@/types'

const Home: NextPage = () => {
  const infos = useAppSelector((state) => state.info.info)
  const [item, setItem] = useState(false)
  const [formType, setFormType] = useState(false)
  const [toast, setToast] = useState(false)
  const [selectedData, setSelectedData] = useState<EditInfoType | null>(null)
  const onAddItem = () => {
    setItem(!item)
    setFormType(true)
  }
  const onEditItem = () => {
    setItem(!item)
    setFormType(false)
  }
  const setSelected = (data: AddInfoType, id: number) => {
    setSelectedData({ data, id })
  }
  const onSetToast = () => {
    setToast(!toast)
  }
  return (
    <>
      {toast && <Header setToastStatus={onSetToast} />}
      <div className='flex min-h-screen justify-center w-full bg-primary'>
        <div>
          <div className='flex justify-center not-italic font-light text-primary text-xl mt-40 '>Offices</div>
          {!item ? (
            <AddLocationButton onSetItem={onAddItem} />
          ) : formType ? (
            <AddItemForm onSetItem={onAddItem} setToastStatus={onSetToast} />
          ) : (
            <EditItemForm onSetItem={onAddItem} selectedData={selectedData} setToastStatus={onSetToast} />
          )}
          {infos.length > 0 &&
            infos.map((element, id) => (
              <InfoPanel
                data={element}
                id={id}
                onSetItemForEdit={() => {
                  onEditItem()
                  setSelected(element, id)
                }}
                onSetItemForRemove={() => {
                  setItem(false)
                  onSetToast()
                }}
              />
            ))}
          <div className='flex justify-center mt-primary text-success font-normal not-italic text-4xl'>
            This project is for test purpose only.
          </div>
          <div className='flex justify-center mt-2 text-primary font-normal not-italic text-5xl'>
            WWW.DOGANDPONYSTUDIOS.COM
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
