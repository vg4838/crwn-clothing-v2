import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { 
  DirectoryContainer, 
  MainCategoriesGrid,
  ApparelSection,
  ApparelTitle,
  SliderContainer
} from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const mainCategories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/mens',
  },
  {
    id: 2,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/womens',
  },
];

const apparelCategories: DirectoryCategory[] = [
  {
    id: 3,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats',
  },
  {
    id: 4,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers',
  },
  {
    id: 5,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      <MainCategoriesGrid>
        {mainCategories.map((category) => (
          <DirectoryItem key={category.id} category={category} isHero={true} />
        ))}
      </MainCategoriesGrid>

      <ApparelSection>
        <ApparelTitle>Shop Apparels</ApparelTitle>
        <SliderContainer>
          {apparelCategories.map((category) => (
            <DirectoryItem key={category.id} category={category} isHero={false} />
          ))}
        </SliderContainer>
      </ApparelSection>
    </DirectoryContainer>
  );
};

export default Directory;
