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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {step === 1 && (
        <Formik
          initialValues={{ name: '', email: '' }}
          validationSchema={UserDetailsSchema}
          onSubmit={handleNextStep}
        >
          <Form>
            <div>
              <label>Name:</label>
              <Field name="name" className="input-field" />
            </div>
            <div>
              <label>Email:</label>
              <Field name="email" type="email" className="input-field" />
            </div>
            <button type="submit" className="btn-primary">Next</button>
          </Form>
        </Formik>
      )}

      {step === 2 && <p>Step 2: Shipping Info</p>}
      {step === 3 && <p>Step 3: Payment Info</p>}
    </div>
  );
}

export default Checkout;
