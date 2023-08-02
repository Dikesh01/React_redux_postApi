import React, { useEffect } from "react";
import { fetchPost } from "../redux/actions/postActions";
// import {
//   postFetching,
//   postFetchSuccess,
//   postFetchError,
// } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";

const PostDisplay = () => {
  let dispatch = useDispatch();
  let { loading, data, error } = useSelector((state) => state);
  console.log({ loading, data, error });
  useEffect(() => {
    // dispatch(postFetching());
    // axios
    //   .get("https://gauravgitacc.github.io/postAppData/posts.json")
    //   .then((response) => {
    //     dispatch(postFetchSuccess(response.data));
    //   })
    //   .catch((error) => {
    //     dispatch(postFetchError(error.message));
    //   });
        dispatch(fetchPost())
  }, []);
 
  return (
    <div>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          );
        })}
    </div>
  );
};
export default PostDisplay;
