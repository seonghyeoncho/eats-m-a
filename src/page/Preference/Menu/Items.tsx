import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
// import ItemFilter from './ItemFilter';
import Select from 'react-select';
import './Items.scss';

interface props {}

const Items: React.FC<props> = (props) => {
  const menu = useSelector((state: RootState) => state.Store.menu);

  const getOptions = () => {
    const categories = menu.categories.map((e) => {
      return { value: e.name, label: e.name };
    });
    return [{ value: 'all', label: '전체보기' }, ...categories];
  };

  const sortOptions = [
    { value: 'mostOrdered', label: '주문 많은순' },
    { value: 'nameAcs', label: '이름 오름차' },
    { value: 'nameDes', label: '이름 내림차' },
  ];

  const categoryCustomStyles = {
    container: (provided: any) => ({
      ...provided,
      width: '500px',
    }),
  };
  const sortCustomStyles = {
    container: (provided: any) => ({
      ...provided,
      width: '200px',
    }),
  };

  return (
    <div className="Items">
      <div className="Filter">
        <div>
          <div className="dorpdownLable">카테고리 선택</div>
          <Select
            options={getOptions()}
            defaultValue={getOptions()[0]}
            styles={categoryCustomStyles}
          />
        </div>
        <div>
          <div className="dorpdownLable">정렬</div>
          <Select
            options={sortOptions}
            defaultValue={sortOptions[0]}
            styles={sortCustomStyles}
          />
        </div>
      </div>
      {/* <ItemFilter options={menu.categories.map((e) => e.name)} /> */}
    </div>
  );
};

export default Items;
