import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserDetailsSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

function Checkout() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <>
    <button className='cursor-pointer border px-5 py-2 bg-blue-500 rounded-lg text-white my-4 ml-6' onClick={() => window.history.back()}> Back</button>
    <div className="p-4 max-w-md mx-auto w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

      {step === 1 && (
        <Formik
          initialValues={{ name: '', email: '' }}
          validationSchema={UserDetailsSchema}
          onSubmit={handleNextStep}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name:</label>
                <Field
                  name="name"
                  className={`input-field w-full px-3 py-2 border rounded ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  autoComplete="off"
                  placeholder="Enter your name"
                />
                {errors.name && touched.name && (
                  <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                )}
              </div>
              <div>
                <label className="block mb-1 font-medium">Email:</label>
                <Field
                  name="email"
                  type="email"
                  className={`input-field w-full px-3 py-2 border rounded ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  autoComplete="off"
                  placeholder = "Enter your email"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}
              </div>
              <button
                type="submit"
                className="btn-primary w-full py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Next
              </button>
            </Form>
          )}
        </Formik>
      )}

      {step === 2 && (
        <div className="text-center">
          <p>Step 2: Shipping Info</p>
        </div>
      )}
      {step === 3 && (
        <div className="text-center">
          <p>Step 3: Payment Info</p>
        </div>
      )}
    </div>
    </>
  )
}

export default Checkout;
