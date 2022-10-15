import {GiRoundStar} from 'react-icons/gi';
import {IconType} from 'react-icons';
import {ComponentType,ReactElement } from 'react';

interface IHeaderlink {
  display : string,
  path : string
};

interface IHeaderTabletLink {
  display : string,
  path : string,
  icon ?:  JSX.Element
}

export const headerLinks: IHeaderlink[] = [
    {
      display: "trải nghiệm dịch vụ",
      path: "/other-services"
    },
    {
      display: "30shine shop",
      path: "/shop"
    },
    {
      display: "hành trình tỏa sáng",
      path: "/shine-journey"
    },
    {
      display: "khám phá kiểu tóc",
      path: "/explore-hairstyles"
    },
    {
      display: "tìm 30shine gần nhất",
      path: "/nearest-salon"
    },
    {
      display: "tuyển dụng",
      path: "/recruit"
    }
  ];

  export const headerTabletLinks : IHeaderTabletLink[]  = [
    {
      display: "trải nghiệm dịch vụ",
      path: "/other-services",
      // icon : <GiRoundStar />
    },
    {
      display: "vòng quay may mắn",
      path: "/rotate-lucky"
    },
    {
      display: "group FB 20.000 thành viên",
      path: "/fb-group"
    },
    {
      display: "30shine shop",
      path: "/shop"
    },
    {
      display: "tìm 30shine gần nhất",
      path: "/nearest-salon"
    },
    {
      display: "tuyển dụng",
      path: "/recruit"
    },
    {
      display: "liên hệ học nghê tóc",
      path: "/recruit"
    }
  ];