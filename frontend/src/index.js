import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';

const initialValues = {
name: '',
category: '',
priceRange: '',
};

const validationSchema = Yup.object({
name: Yup.string().required('Required'),
category: Yup.string().required('Required'),
priceRange: Yup.string().required('Required'),
});

const categories = [
{ value: 'electronics', label: 'Electronics' },
{ value: 'clothing', label: 'Clothing' },
{ value: 'home', label: 'Home' },
];

const priceRanges = [
{ value: 'low', label: 'Low' },
{ value: 'medium', label: 'Medium' },
{ value: 'high', label: 'High' },
];

const PreferenceForm = () => {
const onSubmit = (values) => {
    console.log('Form data', values);
};

return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ setFieldValue, setFieldTouched, values }) => (
        <Form>
        <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />
        </div>

        <div>
            <label htmlFor="category">Category</label>
            <Select
            id="category"
            options={categories}
            onChange={(option) => setFieldValue('category', option.value)}
            onBlur={() => setFieldTouched('category', true)}
            value={categories.find((category) => category.value === values.category)}
            />
            <ErrorMessage name="category" />
        </div>

        <div>
            <label htmlFor="priceRange">Price Range</label>
            <Select
            id="priceRange"
            options={priceRanges}
            onChange={(option) => setFieldValue('priceRange', option.value)}
            onBlur={() => setFieldTouched('priceRange', true)}
            value={priceRanges.find((priceRange) => priceRange.value === values.priceRange)}
            />
            <ErrorMessage name="priceRange" />
        </div>

        <button type="submit">Submit</button>
        </Form>
    )}
    </Formik>
);
};

export default PreferenceForm;
