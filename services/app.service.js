import bodyParser from "body-parser";
import express from "express";
import request from "request";


export const getapp = async (query) => {
  try {

    const options = {
          method: 'GET',
          url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${req.body.number}`,
          json: true,
        }
        request(options, (error, response, body) => {
          console.log(body.items[0].volumeInfo.title);
          res.send(body);
        });
    
    return { 

    };
  } catch (e) {
    throw Error("Error while getting Janken");
  }
};