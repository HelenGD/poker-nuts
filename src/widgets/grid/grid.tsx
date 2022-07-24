import React, { FC } from 'react';
import { CARDS_ITERATOR } from 'shared/config';
import { GridButton } from './grid-button';

export const Grid: FC = () => {
  return (
    <table className="grid">
      <tbody>
        {CARDS_ITERATOR.map((firstCard, rowIndex) => (
          <tr key={firstCard}>
            {CARDS_ITERATOR.map((secondCard, colIndex) => (
              <td key={`${firstCard}${secondCard}`} className="grid-cell">
                <GridButton
                  mode={rowIndex > colIndex ? 'offsuited' : 'suited'}
                  hand={
                    rowIndex > colIndex
                      ? [secondCard, firstCard]
                      : [firstCard, secondCard]
                  }
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
