import React from 'react';
import styled from 'styled-components';

const FilterMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* Добавьте здесь дополнительные стили по вашему усмотрению */
`;

const FilterTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;
  /* Добавьте здесь дополнительные стили по вашему усмотрению */
`;

const Slider = styled.input`
  width: 100%;
  /* Добавьте здесь дополнительные стили по вашему усмотрению */
`;

const Filter = ({ title, options, onChange }) => (
    <div>
        <FilterTitle>{title}</FilterTitle>
        {options.map(option => (
            <label key={option}>
                <input
                    type="checkbox"
                    value={option}
                    onChange={onChange}
                />
                {option}
            </label>
        ))}
    </div>
);

const YearSlider = styled.input`
  width: 100%;
  /* Добавьте здесь дополнительные стили по вашему усмотрению */
`;

const YearFilter = ({ title, options, onChange }) => (
    <div>
        <FilterTitle>{title}</FilterTitle>
        <YearSlider
            type="range"
            min={options[0]}
            max={options[options.length - 1]}
            onChange={onChange}
        />
        <div>{options[0]}</div>
        <div>{options[options.length - 1]}</div>
    </div>
);

const Filters = ({ onYearChange, onLanguageChange, onRatingChange, onGenreChange }) => {
    const years = [1990, 2000, 2010, 2020];
    const languages = ['Русский', 'Английский', 'Японский'];
    const ratings = ['6+', '12+', '16+', '18+'];
    const genres = [
        'Экшн',<br> ,'Драма',<br/> , 'Боевик',<br/> , 'Романтика',<br/> , 'Меха',<br/> , 'Мистика',<br/> ,
        'Фэнтези',<br/> , 'Научная фантастика',<br/> , 'Комедия',<br/> , 'Спорт',<br/> , 'Ужасы'
    ];

    return (
        <FilterMenu>
            <YearFilter title="Год выпуска" options={years} onChange={onYearChange} />
            <Filter title="Язык" options={languages} onChange={onLanguageChange} />
            <Filter title="Возрастной рейтинг" options={ratings} onChange={onRatingChange} />
            <Filter title="Жанры" options={genres} onChange={onGenreChange} />
        </FilterMenu>
    );
};

export default Filters;
