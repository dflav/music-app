import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const searchChangeHandler = event => setSearchTerm(event.target.value)
  const searchSubmitHandler = event => {
    event.preventDefault()
    navigate(`search/${searchTerm}`)
  }

  return (
    <form
      onSubmit={searchSubmitHandler}
      autoComplete='off'
      className='p-4 mb-1 flex text-gray-500 focus-within:text-gray-900 relative '
    >
      <FiSearch aria-hidden='true' className='w-6 h-6 absolute z-10 top-[22px] left-7' />
      <input
        type='text'
        name='search-field'
        placeholder='What do you want to listen to?'
        value={searchTerm}
        className='pl-12 py-[6px] rounded-full text-base placeholder-gray-500  sm:w-96 w-[calc(100%-55px)] shadow outline-none text-black'
        onChange={searchChangeHandler}
      />
    </form>
  )
}

export default Searchbar
