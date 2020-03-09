import React from 'react';
import {
  Image,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import PropTypes from 'prop-types';

import { argonTheme } from '../../constants';

const { width } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBlock: {
    overflow: 'hidden',
    borderRadius: 4,
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  productImage: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 300,
    height: 200,
    borderRadius: 3,
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE,
  },
});

function Articles({ articleTitle, articleImage, articleUrl }) {
  return (
    <TouchableHighlight
      style={{ zIndex: 3 }}
      key={`product-${articleTitle}`}
      onPress={articleUrl}
    >
      <Block center style={styles.productItem}>
        <Image
          resizeMode="cover"
          style={styles.productImage}
          source={{ uri: articleImage }}
        />
        <Block
          center
          style={{ paddingHorizontal: theme.SIZES.BASE, marginTop: 15 }}
        >
          <Text center size={16}>
            {articleTitle}
          </Text>
        </Block>
      </Block>
    </TouchableHighlight>
  );
}

Articles.propTypes = {
  articleTitle: PropTypes.string,
  articleImage: PropTypes.string,
  articleUrl: PropTypes.string,
};

Articles.defaultProps = {
  articleTitle: 'Título da Notícia',
  articleImage: 'https://placehold.it/500x500',
  articleUrl: 'https://metodista.br',
};

export default Articles;
