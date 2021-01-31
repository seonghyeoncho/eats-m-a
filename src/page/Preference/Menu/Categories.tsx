import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { StoreAction } from '../../../redux/actions';
import './Categories.scss';

interface props {}

interface Category {
  name: string;
  description: string;
}

const Categories: React.FC<props> = (props) => {
  const categories = useSelector(
    (state: RootState) => state.Store.menu.categories
  );

  const CategoryInput = () => {
    const [newCategoryName, setNewCategoryName] = useState('');
    const [newCategoryDescription, setNewCategoryDescription] = useState('');
    const dispatch = useDispatch();

    const handleOnClickAddCategory = () => {
      dispatch(
        StoreAction.addCategoryFireBase(newCategoryName, newCategoryDescription)
      );
      setNewCategoryName('');
      setNewCategoryDescription('');
    };

    return (
      <div className="CategoryTile">
        <div>
          <input
            placeholder="이름"
            onChange={(e) => setNewCategoryName(e.target.value)}
            value={newCategoryName}
          />
        </div>
        <div>
          <input
            placeholder="설명 "
            onChange={(e) => {
              setNewCategoryDescription(e.target.value);
            }}
            value={newCategoryDescription}
          />
        </div>
        <div onClick={handleOnClickAddCategory}>추가</div>
      </div>
    );
  };

  const Category = (props: Category) => {
    return (
      <div className="CategoryTile">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    );
  };

  return (
    <div className="CategoryPreference">
      {categories.map((e) => {
        return (
          <Category name={e.name} description={e.description} key={e.name} />
        );
      })}
      <CategoryInput />
    </div>
  );
};

export default Categories;
