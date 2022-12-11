import React, { useState } from 'react';
import './AddProduct.css'
import fitucherImage from '../../Images/Iphone14.jpg'
import { Select } from 'antd';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

  // Select Category and Brand Name Start -------------------
  const provinceData  = ['Laptop', 'SmartPhone', 'Camera', 'Gaming', 'Headphones', 'Speakers', 'Monitor'];
  const cityData = {
    Laptop: ['HP', 'Asus', 'Dell'],
    SmartPhone: ['Iphone', 'Nokia', 'Samsung'],
    Camera: ['Canon', 'Nikon', 'Sony'],
    Gaming: ['game1', 'game2', 'game3'],
    Headphones: ['Iphone', 'Redmi', 'Symphony'],
    Speakers: ['Spekar1', 'Spekar2', 'Spekar3'],
    Monitor: ['monitor1', 'monitor2', 'monitor3'],
  };
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const [inputCategoryData, setInputCategoryData] = useState('')
  const [inputBrandData, setInputBrandData] = useState('')
  const [inputCriteriaData, setInputCriteriaData] = useState('')
  const handleProvinceChange = (value) => {
    setInputCategoryData(value)
    setInputBrandData('')
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  const onSelect = (value) => {
    setInputBrandData(value)
  }
  // Select Category and Brand Name End -------------------

  // Select Criteria Data ---------------------------------
  const handleChange = (value) => {
      // console.log(`selected ${value}`);
      setInputCriteriaData(value)
  };


  // React Hook Form --------------------------------------
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const formData = {...data, inputCategoryData, inputBrandData, inputCriteriaData}
    console.log('Form Data =', formData);
  };



    return (
        <div className='container'>
            <h4 className='px-4 py-2 fw-light bg-light shadow mt-2 border-top'>Post Product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row p-4">
                    <div className="col-md-8">
                        <p className='fw-semibold mb-1 mt-2'>Product Title</p>
                        <input className='input_title' type="text" placeholder='Product Title........'  {...register("title")}/>
                        <p className='fw-semibold mb-1 mt-2'>Product Description</p>
                        <textarea className='input_description' id="" cols="30" rows="10" placeholder='Type Product Description.........'  {...register("descriptio")}/>
                        <div className='mt-3 d-md-flex'>
                            <div className='mb-3'>
                              <span className='fw-semibold mb-1 mt-2 me-2'>Select Category :</span>
                              <Select
                                // defaultValue={provinceData[0]}
                                placeholder='Select Category'
                                className='me-3'
                                style={{
                                  width: 200,
                                }}
                                onChange={handleProvinceChange}
                                options={provinceData.map((province) => ({
                                  label: province,
                                  value: province,
                                }))}
                              />
                            </div>
                            <div className='mb-3'>
                              <span className='fw-semibold mb-1 mt-2 me-2'>Select Brand :</span>
                              <Select
                                style={{
                                  width: 200,
                                }}
                                value={secondCity}
                                onSelect={onSelect}
                                onChange={onSecondCityChange}
                                options={cities.map((city) => ({
                                  label: city,
                                  value: city,
                                }))}
                              />
                            </div>
                        </div>  
                       <p className='fw-semibold mb-1 me-2'>Product Criteria</p>
                        <Select
                          placeholder="Select Criteria"
                          style={{
                            width: 200,
                          }}
                          onChange={handleChange}
                          options={[
                            { value: 'Flash Sale', label: 'Flash Sale',},
                            { value: 'Top Rated', label: 'Top Rated',},
                            { value: 'Featured', label: 'Featured',},
                            { value: 'Best Saleing', label: 'Best Saleing',},
                          ]}
                        />
                    </div>
                    <div className="col-md-4">
                        <div className='bg-light mx-3 mt-4 p-3'>
                            <p className='fw-bold'>Featured Image</p>
                            <div>
                                <img src={fitucherImage} style={{width: '100%', }} alt="" />
                            </div>
                            <input type="file" style={{width: '100%'}} className='border py-2 mt-3'  {...register("image")}/>
                        </div>
                    </div>
                    <input className='submit_button me-md-5 me-sm-4 me-3 mt-3' type="submit" value='Post' />
                </div> 
            </form>
        </div>
    );
};

export default AddProduct;