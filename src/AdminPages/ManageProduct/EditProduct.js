
    import React, { useEffect, useState } from 'react';
    import defaultImage from '../../Images/background_image.png'
    import { Rate, Select } from 'antd';
    import { useForm } from 'react-hook-form';
    import {storage} from '../../Firebase.init';
    import { ref , getDownloadURL, uploadBytesResumable} from "firebase/storage";
    import { useParams } from 'react-router-dom';
    
    const EditProduct = () => {
    
      const {id} = useParams('')
      const [singleProductData, setSingleProductData] = useState({})
    
      useEffect(() => {
        if(id){
          fetch(`https://complete-ecommerce-shop-advance-server-site.vercel.app/${id}`)
          .then(res=> res.json())
          .then(data => setSingleProductData(data));
        }
      },[id])
     
     
    
      // Select Category and Brand Name Start -------------------
      const categoryData  = ['Laptop', 'SmartPhone', 'Camera', 'Drone', 'Headphones', 'Speakers', 'Monitor'];
      const brandData = {
        Laptop: ['HP', 'Asus', 'Dell', 'Lenovo', 'Acer', 'MSI', 'Microsoft'],
        SmartPhone: ['Iphone', 'Nokia', 'Samsung', 'Vivo', 'Realme', 'Readme', 'Sony'],
        Camera: ['Canon', 'Nikon', 'Sony', 'Fujifilm', 'Panasonic', 'Olympus', 'PENTAX' ],
        Drone: ['DJI', 'Yuneec', 'Parrot SA', 'Autel Robotics', 'Hubsan'],
        Headphones: ['Bose', 'Apple', 'Sony', 'JBL', 'Beats'],
        Speakers: ['Amazon', 'Anker', 'Apple', 'Bose', 'Google', 'JBL'],
        Monitor: ['Acer', 'ASUS', 'Dell', 'Gigabyte', 'LG', 'Samsung'],
      };
      const [category, setCategory] = useState(brandData[categoryData[0]]);
      const [brand, setBrand] = useState(brandData[categoryData[0]][0]);

      const [newfeaturedImage , setNewFeaturedImage] = useState('');
      const [newinputCategoryData, setNewInputCategoryData] = useState('')
      const [newinputBrandData, setNewInputBrandData] = useState('')
      const [newinputRating, setNewInpuRating] = useState(0)
      const [newinputCriteriaData, setNewInputCriteriaData] = useState('')


      const handleProvinceChange = (value) => {
        setNewInputCategoryData(value)
        setNewInputBrandData('')
        setCategory(brandData[value]);
        setBrand(brandData[value][0]);
      };
      const onbrandChange = (value) => {
        setBrand(value);
      };
      const onSelect = (value) => {
        setNewInputBrandData(value)
      }
      // Select Category and Brand Name End -------------------
    
      // Select Criteria Data ---------------------------------
      const handleChange = (value) => {
          setNewInputCriteriaData(value)
      };
    
      const ratingValue = (value) => {
        setNewInpuRating(value)
      }
    
    
      // const [inputUpload, setInputUpload] = useState('')
      
    
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
                        setNewFeaturedImage(element.src)
                        console.log('inputUpload', newfeaturedImage)
                    }
                console.log('imageUpload')
            }
        } catch (error) {
            console.log(error)
        }
      }

      let title;
      let price;
      let description;
      let inputCategoryData;
      let inputBrandData;
      let inputCriteriaData;
      let featuredImage;
      let inputRating;
    
      // React Hook Form --------------------------------------
      const { register, handleSubmit, formState: { errors }, reset } = useForm();
      const onSubmit = data => {

        if(data.title){title = data.title}else{ title = singleProductData.title}
        if(data.description){description = data.description}else{ description = singleProductData.description}
        if(data.price){price = data.price }else{ price = singleProductData.price }
        if(newinputCategoryData){inputCategoryData = newinputCategoryData }else{ inputCategoryData = singleProductData.inputCategoryData}
        if(newinputBrandData){inputBrandData = newinputBrandData }else{ inputBrandData = singleProductData.inputBrandData}
        if(newinputCriteriaData){inputCriteriaData = newinputCriteriaData }else{ inputCriteriaData = singleProductData.inputCriteriaData}
        if(newfeaturedImage){featuredImage = newfeaturedImage }else{ featuredImage = singleProductData.featuredImage}
        if(newinputRating){inputRating = newinputRating }else{ inputRating = singleProductData.inputRating}

        console.log('SingleProduct Data', singleProductData)

        const newData = {title, description, price, inputCategoryData, inputBrandData, inputCriteriaData, featuredImage, inputRating}
        console.log('Form Data', newData)
        // 

        fetch(`https://complete-ecommerce-shop-advance-server-site.vercel.app/${id}`, {
          method: 'PUT',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(newData)
        }).then(res => res.json())
          .then(data => console.log('data', data))
    
      }
    
    
    
    
        return (
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row p-4">
                        <div className="col-md-8">
                            <p className='fw-semibold mb-1 mt-2'>Product Title</p>
                            {singleProductData?.title ? <input className='input_title' type="text" defaultValue={singleProductData.title}  {...register("title")}/> : !singleProductData?.title ? <input className='input_title' type="text" defaultValue=''  placeholder='Product Title........'  {...register("title")}/> : ''}
                            <p className='fw-semibold mb-1 mt-2'>Product Description</p>
                            {singleProductData?.description ? <textarea className='input_description' id="" cols="30" rows="10" defaultValue={singleProductData.description}  {...register("description")}/> : <textarea className='input_description' id="" cols="30" rows="10" placeholder='Type Product Description.........'  {...register("description")}/>}
                            <div className='mt-3 d-md-flex'>
                                <div className='mb-3'>
                                  <span className='fw-semibold mb-1 mt-2 me-2'>Select Category :</span>
                                  {singleProductData?.inputCategoryData &&
                                  <Select
                                    defaultValue={`${singleProductData.inputCategoryData}`}
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
                                    }
                                  {!singleProductData?.inputCategoryData &&
                                  <Select
                                    defaultValue='Select Category'
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
                                    }
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
                                    options={ category.map((city) => ({
                                      label: city,
                                      value: city,
                                    }))}
                                  />
                                </div>
                            </div>  
                           <p className='fw-semibold mb-1 me-2'>Product Criteria</p>
                            {
                              singleProductData?.inputCriteriaData && 
                              <Select
                              defaultValue={singleProductData.inputCriteriaData}
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
                            }
                            {
                              !singleProductData?.inputCriteriaData  && 
                              <Select
                              defaultValue='Criteria'
                              placeholder='Criteria'
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
                            }
                            <p className='fw-semibold mb-1 mt-2'>Product Price</p>
                            {singleProductData?.price ? <input className='product_price' type="text" defaultValue={singleProductData.price}  {...register("price")}/> : <input className='product_price' type="text" placeholder='Product Price'  {...register("price")}/>}
                            <p className='fw-semibold mb-1 mt-2'>Product Rating</p>
                            {singleProductData?.inputRating && <Rate allowHalf onChange={ratingValue} defaultValue={singleProductData.inputRating} />}
                            {!singleProductData?.inputRating && <Rate allowHalf onChange={ratingValue} />}
                        </div>
                        <div className="col-md-4">
                            <div className='bg-light mx-3 mt-4 p-3'>
                                <p className='fw-bold'>Featured Image</p>
                                <div className='background_default_image' style={{width: '100%', height: '180px'}}>
                                    <img src={newfeaturedImage? newfeaturedImage : singleProductData?.featuredImage ? singleProductData.featuredImage : defaultImage} style={{width: '100%', height: '100%' }} alt="" />
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
    
    export default EditProduct;
