import { Formik, Form, Field } from 'formik';
import { useMemo, useState } from 'react';

export default function Home() {
  const [params, setParams] = useState<any>();
  
  const previewUrl = useMemo(() => {
    if (!params) return '';
    return `/api/card?${new URLSearchParams(params).toString()}`;
  }, [params])
  
  return (
    <div>
      <h1>Hello!</h1>

      <Formik
        initialValues={{ content: '', template: 'snowy' }}
        onSubmit={(values, { setSubmitting }) => {
          setParams(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="content" placeholder="Your greetings" required/>
            
            <label>
              <Field type="radio" name="template" value="snowy" required />
              Snowy
            </label>
            
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <div>
        {previewUrl ? (
          <>
            <img src={previewUrl} alt="Christmas card" />
            <a href={previewUrl} download="Christmas Card">Download</a>
          </>
        ) : null}
      </div>
    </div>
  )
}
