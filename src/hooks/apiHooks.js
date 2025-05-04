import axios from "axios";
import { useEffect, useState } from "react";




export const useApiHooks = (apiUrl, params) => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();



  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiUrl, {
        params: params
      });
      setLoading(false);
      setData(response.data);
      console.log(data);
    } catch (err) {
      setLoading(false);
      setError(err.message)
    }

  }

  useEffect(() => {
    getData();
  }, []);

  return [data, loading, error];



}