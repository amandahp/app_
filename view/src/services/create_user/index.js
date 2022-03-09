import axios from "axios";

const postData = async (name, email, password) => {
  await axios.post(
  `${process.env.REACT_APP_HOSTNAME}`, 
    {
        'name': name,
        'email': email,
        'password': password
    }
  );
}

export default postData;