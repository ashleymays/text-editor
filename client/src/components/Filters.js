import React from 'react';
import TextFilter from './TextFilter';
import AlignFilter from './AlignFilter';
import ThemeFilter from './ThemeFilter';

export default function Filters() {
    return (
        <div className="filters">
            <TextFilter />
            <div className="divider" />
            <AlignFilter />
            <div className="divider" />
            <ThemeFilter />                
        </div>
    )
}