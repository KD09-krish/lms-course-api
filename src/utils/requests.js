import axios from "axios";

export const getLectureList = async (slug) => {
  const token = window.localStorage("access_token");
  const res = await axios.get(
    process.env.REACT_APP_BACKEND2_URL +
      "/API/course/" +
      slug +
      "?token=" +
      token
  );
  return res.data.data.map((lecture) => ({
    id: lecture.slug,
    title: lecture.lectureTitle,
  }));
  // return [
  //   {
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 1.",
  //     id: 1,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 2.",
  //     id: 2,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 3.",
  //     id: 3,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 4.",
  //     id: 4,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 5.",
  //     id: 5,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 6.",
  //     id: 6,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 7.",
  //     id: 7,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 8.",
  //     id: 8,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 9.",
  //     id: 9,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 10.",
  //     id: 10,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 11.",
  //     id: 11,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing el 12.",
  //     id: 12,
  //   },
  // ];
};

export const getFaq = async (
  course_id = "63bc26feda625a2ab6814d92",
  lecture_id = "63bc26fdda625a2ab6814d90"
) => {
  const res = await axios.get(
    process.env.REACT_APP_SOCKET_BACKEND +
      `/doubt?course=${course_id}&lecture=${lecture_id}`
  );

  return res.data.data;
  // return [
  //   {
  //     question:
  //       "1. Lorem ipsum dolor sit amet, consectetur adipiscing el. Lorem ipsum dolor sit amet, consectetur adipiscing el.",
  //     answers: [
  //       {
  //         user: "John",
  //         time: "15/04/23",
  //         answer:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  //       },
  //       {
  //         user: "Doe",
  //         time: "13/04/23",
  //         answer:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  //       },
  //     ],
  //   },
  //   {
  //     question:
  //       "1. Lorem ipsum dolor sit amet, consectetur adipiscing el. Lorem ipsum dolor sit amet, consectetur adipiscing el.",
  //     answers: [
  //       {
  //         user: "John",
  //         time: "15/04/23",
  //         answer:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  //       },
  //       {
  //         user: "Doe",
  //         time: "13/04/23",
  //         answer:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  //       },
  //     ],
  //   },
  //   {
  //     question:
  //       "1. Lorem ipsum dolor sit amet, consectetur adipiscing el. Lorem ipsum dolor sit amet, consectetur adipiscing el.",
  //     answers: [
  //       {
  //         user: "John",
  //         time: "15/04/23",
  //         answer:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  //       },
  //       {
  //         user: "Doe",
  //         time: "13/04/23",
  //         answer:
  //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  //       },
  //     ],
  //   },
  // ];
};
