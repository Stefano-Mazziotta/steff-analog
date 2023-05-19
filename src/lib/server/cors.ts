import Cors, { CorsOptions } from "cors";

const whitelist = ['http://localhost:3000', 'https://steff-analog.vercel.app/'];

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