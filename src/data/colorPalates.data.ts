interface ColorPalatesData {
  [key: string]: {
    "--background-primary": string;
    "--background-secondary": string;
    "--primary": string;
    "--secondary": string;
  };
}
const colorPalatesData: ColorPalatesData = {
  landing: {
    "--background-primary": "0 0% 97%", // #F7F7F7
    "--background-secondary": "216 11.1% 8.8%", // #141619
    "--primary": "225 99% 28%",
    "--secondary": "0 0% 10%",
  },
  tech: {
    "--background-primary": "216 11.1% 8.8%",
    "--background-secondary": "0 0% 97%",
    "--primary": "225 99% 28%",
    "--secondary": "0 0% 15%",
  },
  media: {
    "--background-primary": "216 11.1% 8.8%",
    "--background-secondary": "0 0% 97%",
    "--primary": "225 99% 28%",
    "--secondary": "0 0% 80%",
  },
  business: {
    "--background-primary": "220.2 98.2% 42.9%",
    "--background-secondary": "0 0% 97%",
    "--primary": "225 99% 28%",
    "--secondary": "0 0% 80%",
  },
  "curium-intelligence": {
    "--background-primary": "0 0% 100%",
    "--background-secondary": "0 0% 98%",
    "--primary": "225 99% 28%",
    "--secondary": "0 0% 80%",
  },
};

export default colorPalatesData;
