import Cors, { CorsOptions } from "cors";

const whitelist = process.env.CORS_WHITELIST ? process.env.CORS_WHITELIST.split(", ") : [];

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {

    if (origin === undefined) {
      callback(null, false);
      return;
    }

    const isAllowedOrigin = whitelist.indexOf(origin) !== -1;

    if (!isAllowedOrigin) {
      callback(new Error('Not allowed by CORS'));
      return;
    }

    callback(null, true);
  },
  methods: ['POST', 'GET', 'HEAD'],
};

export const cors = Cors(corsOptions);