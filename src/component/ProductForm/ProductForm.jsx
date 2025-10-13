import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import "../ProductForm/ProductForm.css"
import { ErrorMessage } from 'formik'
import * as Yup from "yup";
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const validationSchema = Yup.object({
    name: Yup.string().required('نام محصول اجباری است!').min(3,"حداقل 3 کاراکتر"),
    price: Yup.number().required('قیمت اجباری است!'),
    discount: Yup.number().min(0,'حداقل 0').max(90,'حداکثر 90'),
    isNew: Yup.boolean(),
});


function ProductForm() {


  const mutation = useMutation ({

    mutationFn: async (valuse) =>{ const response = await axios.post('https://68da085190a75154f0dbaf13.mockapi.io/product',
                   values
                 ); return response.data },
                 onSuccess: (res) => {res.data}
  })

  const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <Formik initialValues={{
            name:"",
            price: undefined,
            imageUrl: "/a55sam.jpeg",
            isNew: false,
            discount: 0,
        }}

            onSubmit={(valuse) => {
              mutation.mutate(valuse)
            }}
                 

                //console.log(values);
            
            validationSchema={validationSchema}
        >
            <Form>
            <div className='modalOverlay'>
                <div className='modalCard'>
                  <button className='closeModal'  >  بستن  </button>
                <div className='formGroup'>
                  <label htmlFor='name'> نام محصول </label>
                  <Field autocomplete="off" type="text" name="name" id="name" placeholder="نام محصول را وارد کنید" />
                  <ErrorMessage name="name" className='error-message' component={"span"} />
                </div>

                <div className='formGroup'>
                  <label htmlFor='price'> قیمت محصول </label>
                  <Field type="number" name="price" id="price" placeholder="قیمت محصول را وارد کنید" />
                  <ErrorMessage name="price" className='error-message' component={"span"} />
                </div>

                 <div className='formGroup'>
                  <label htmlFor='discount'> تخفیف محصول </label>
                  <Field type="number" name="discount" id="discount" placeholder="میزان تخفیف محصول را وارد کنید"/>
                  <ErrorMessage name="discount" className='error-message' component={"span"} />
                </div>

                <div className='formGroup'>
                  <label htmlFor='isNew'> محصول جدید </label>
                  <Field type="checkbox" name="isNew" id="isNew" className="checkbox"/>
                  {/* <ErrorMessage name="discount" className='error-message' component={"span"} /> */}
                </div>

                <div className='actions'>
                    <button type="submit" className='btnPrimary' >  تایید  </button>
                </div>
                </div>
            </div>
            </Form>
        </Formik>
    )
}

export default ProductForm;



{/* <Formik initialValues={{
            name:"",
            price: undefined,
            imageUrl: "/a55sam.jpeg",
            isNew: false,
            discount: 0,
        }}

            onSubmit={ async (values)=>{

                 const response = await axios.post('https://68da085190a75154f0dbaf13.mockapi.io/product',
                   values
                 );

                //console.log(values);
            }}
            validationSchema={validationSchema}
        ></Formik> */}