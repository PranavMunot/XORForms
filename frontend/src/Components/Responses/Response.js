import { Button, Card, Container, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Csv from "../../ConvertComponents/Csv";

function Response() {
  const response = useSelector((state) => state.response);
  const [data, setData] = useState(response);

  useEffect(() => {
    setData(response);
  }, [response]);

  return (
    <Container>
      <Typography sx={{ marginY: 2 }} variant="h3">
        Responses {data.length}
      </Typography>
      <Card sx={{ padding: 2 }}>
        {!(data.length <= 0) ? (
          data.map((item) => {
            return (
              <>
                {item.response.map((resItem) => {
                  return (
                    <>
                      <Typography key={resItem.id} variant="subtitle1">
                        {resItem.fieldName} :{" "}
                        <b>
                          {typeof resItem.data === "string"
                            ? resItem.data
                            : resItem.data.join(", ")}{" "}
                        </b>
                      </Typography>
                      <br />
                    </>
                  );
                })}
                <Divider />
              </>
            );
          })
        ) : (
          <Typography sx={{ margin: 2 }} variant="body1">
            No Responses Yet!
          </Typography>
        )}
      </Card>
      <Link className="link" to="/">
        <Button sx={{ fontWeight: 700, marginY: 2 }} variant="contained">
          Back
        </Button>
      </Link>
      <Csv />
    </Container>
  );
}

export default Response;
// data
/*
[{
    id:
    response:[{
        id:"",
        fieldName:"Name",
        data:"Pranav",
    },{
        id:"",
        fieldName:"Options",
        data:["A","B"] ,
    }]
}{
    id:""
    response:[{
        id:"",
        fieldName:"Name",
        data:"Sai",
    },{
        id:"",
        fieldName:"Options",
        data:["B","C"] ,
    }]
}]
*/
