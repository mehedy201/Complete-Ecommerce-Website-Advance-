import React, { useState } from 'react';
import './AddProduct.css'
import defaultImage from '../../Images/background_image.png'
import { Rate, Select } from 'antd';
import { useForm } from 'react-hook-form';
import {storage} from '../../Firebase.init';
import { ref , getDownloadURL, uploadBytesResumable} from "firebase/storage";

const AddProduct = () => {

  // Select Category and Brand Name Start -------------------
  const categoryData  = ['Laptop', 'SmartPhone', 'Camera', 'Gaming', 'Headphones', 'Speakers', 'Monitor'];
  const brandData = {
    Laptop: ['HP', 'Asus', 'Dell'],
    SmartPhone: ['Iphone', 'Nokia', 'Samsung'],
    Camera: ['Canon', 'Nikon', 'Sony'],
    Gaming: ['game1', 'game2', 'game3'],
    Headphones: ['Bose', 'Apple', 'Sony'],
    Speakers: ['Spekar1', 'Spekar2', 'Spekar3'],
    Monitor: ['monitor1', 'monitor2', 'monitor3'],
  };
  const [category, setCategory] = useState(brandData[categoryData[0]]);
  const [brand, setBrand] = useState(brandData[categoryData[0]][0]);

  const [inputRating, setInputRating] = useState('')
  const [inputCategoryData, setInputCategoryData] = useState('')
  const [inputBrandData, setInputBrandData] = useState('')
  const [inputCriteriaData, setInputCriteriaData] = useState('')
  const handleProvinceChange = (value) => {
    setInputCategoryData(value)
    setInputBrandData('')
    setCategory(brandData[value]);
    setBrand(brandData[value][0]);
  };
  const onbrandChange = (value) => {
    setBrand(value);
  };
  const onSelect = (value) => {
    setInputBrandData(value)
  }


  const ratingValue = (value) => {
    setInputRating(value)
  }
  // Select Category and Brand Name End -------------------

  // Select Criteria Data ---------------------------------
  const handleChange = (value) => {
      // console.log(`selected ${value}`);
      setInputCriteriaData(value)
  };


  // const [inputUpload, setInputUpload] = useState('')
  const [featuredImage , setFeaturedImage] = useState('');

  // Handle upload OnChange---------------------------------
  const handleUpload = async  (file) => {
    // console.log(file)
    // setInputUpload([]);
    try {
            var imageUrl = [];
            for (let i = 0; i < file.length; i++) {
                const imgName = file[i].name + Date.now();
                const storageRef = ref(storage, `/product_images/${imgName}`);
                const uploadTask = await uploadBytesResumable(storageRef, file[i]);
                const url = await getDownloadURL(uploadTask.ref);
                imageUrl.push({src: url});
            
                console.log(imageUrl)
                for (let i = 0; i < imageUrl.length; i++) {
                    const element = imageUrl[i];
                    setFeaturedImage(element.src)
                    console.log('inputUpload', featuredImage)
                }
            console.log('imageUpload')
        }
    } catch (error) {
        console.log(error)
    }
  }

  // React Hook Form --------------------------------------
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    const formData = {...data, inputCategoryData, inputBrandData, inputCriteriaData, featuredImage, inputRating}
    console.log('Form Data =', formData);
    
  // Sent Email Data Server ----------------------
    fetch('http://localhost:5000/products',{
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
          if(data.success){
              console.log('data', data)
              alert('Email Sent')
              setFeaturedImage('')
              reset();
          }
          if(data.error){
              alert('Email Not Sent')
          }
      })
  }





    return (
        <div className='container'>
            <h4 className='px-4 py-2 fw-light bg-light shadow mt-2 border-top'>Post Product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row p-4">
                    <div className="col-md-8">
                        <p className='fw-semibold mb-1 mt-2'>Product Title</p>
                        <input className='input_title' type="text" placeholder='Product Title........'  {...register("title")}/>
                        <p className='fw-semibold mb-1 mt-2'>Product Description</p>
                        <textarea className='input_description' id="" cols="30" rows="10" placeholder='Type Product Description.........'  {...register("description")}/>
                        <div className='mt-3 d-md-flex'>
                            <div className='mb-3'>
                              <span className='fw-semibold mb-1 mt-2 me-2'>Select Category :</span>
                              <Select
                                // defaultValue={categoryData[0]}
                                placeholder='Select Category'
                                className='me-3'
                                style={{
                                  width: 200,
                                }}
                                onChange={handleProvinceChange}
                                options={categoryData.map((province) => ({
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
                                value={brand}
                                onSelect={onSelect}
                                onChange={onbrandChange}
                                options={category.map((city) => ({
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
                        <p className='fw-semibold mb-1 mt-2'>Product Price</p>
                        <input className='product_price' type="text" placeholder='Product Price'  {...register("price")}/>
                        <p className='fw-semibold mb-1 mt-2'>Product Rating</p>
                        <Rate allowHalf onChange={ratingValue} />
                    </div>
                    <div className="col-md-4">
                        <div className='bg-light mx-3 mt-4 p-3'>
                            <p className='fw-bold'>Featured Image</p>
                            <div className='background_default_image' style={{width: '100%', height: '180px'}}>
                                <img src={featuredImage? featuredImage : defaultImage} style={{width: '100%', height: '100%' }} alt="" />
                            </div>
                            <input type="file" onChange={(e) => handleUpload(e.target.files)} style={{width: '100%'}} className='border py-2 mt-3' multiple/>
                        </div>
                    </div>
                    <input className='submit_button me-md-5 me-sm-4 me-3 mt-3' type="submit" value='Publish' />
                </div> 
            </form>
        </div>
    );
};

export default AddProduct;