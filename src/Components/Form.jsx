import React, { useState } from 'react'

const Form = () => {
  const [form, setForm] = useState({})

  const onChange = (e) => {
    // console.log(e.target.value)
    // let name = e.target.name
    // let value = e.target.value both name and value can be written as:
    let { name, value, type, checked, files } = e.target //destructuring e.target
    // console.log(name, value, type, checked, files)

    if (type === 'checkbox') {
      setForm({
        ...form,
        [name]: checked,
      })
    } else if (type === 'file') {
      setForm({
        ...form,
        [name]: files,
      })
    } else {
      setForm({
        ...form,
        [name]: value,
      })
    }
  }

  // useEffect(() => {
  //   console.log(form)
  // }, [form])

  const submitFun = (event) => {
    event.preventDefault()
    console.log(form)
  }

  return (
    <div>
      Form
      <form onSubmit={submitFun}>
        <div>
          <label>Name : </label>
          <input
            type='text'
            placeholder='Enter Name...'
            name='userName'
            // onChange={(e) => {
            //   setForm({ ...form, userName: e.target.value })
            // }}   this is one way of handling the change using spread operators and useState. Applied to all the elements in the form.
            onChange={onChange}
          ></input>
        </div>

        <div>
          <label>Email : </label>
          <input
            type='email'
            placeholder='Enter Email...'
            name='email'
            onChange={onChange}
          ></input>
        </div>

        <div>
          <label>Password : </label>
          <input
            type='password'
            placeholder='Enter Password...'
            name='password'
            onChange={onChange}
          ></input>
        </div>

        <div>
          <label>Age : </label>
          <input type='number' name='age' onChange={onChange} />
        </div>

        <div>
          <label>City </label>
          <select name='city' onChange={onChange}>
            <option value=''>Select</option>
            <option value='Bengaluru'>Bengaluru</option>
            <option value='Chennai'>Chennai</option>
            <option value='Goa'>Goa</option>
          </select>
        </div>

        <div>
          <input
            type='checkbox'
            name='isIndian'
            // checked={form.isIndian}
            onChange={onChange}
          />
          <label>Is Indian</label>
        </div>

        <div>
          <div>
            <input type='radio' name='gender' onChange={onChange} />
            <label>Male</label>
          </div>
          <div>
            <input type='radio' name='gender' onChange={onChange} />
            <label>Female</label>
          </div>
        </div>

        <div>
          <label>User Resume : </label>
          <input
            type='file'
            name='resume'
            // files={form.resume}
            onChange={onChange}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
