import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

function Csv() {
  const response = useSelector((state) => state.response);
  const [data, setData] = useState(response);

  useEffect(() => {
    setData(response);
  }, [response]);

  const download = () => {
    let contents = [];

    if (!(data.length <= 0)) {
      let header = [];
      data[0].response.map((item) => {
        header.push(item.fieldName);
      });

      contents.push(header); //header of csv

      data.map((item) => {
        let newArray = [];
        item.response.map((value) => {
          header.map((fldName) => {
            if (fldName === value.fieldName) {
              if (typeof value.data === "string") {
                newArray.push(value.data);
              } else {
                let arraytoString = value.data.join(", ");
                newArray.push(arraytoString);
              }
            }
          });
          contents.push(newArray);
        });
      });
      console.log(contents);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={download}>
        Download the CSV file!
      </Button>
    </div>
  );
}

export default Csv;
