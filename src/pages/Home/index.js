import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import api from '../../services/api';
import { argonTheme } from '../../constants';

import Articles from '../../components/news';

const { width } = Dimensions.get('screen');
const cardWidth = width - theme.SIZES.BASE * 2;

export default function Home() {
  const [news, setNews] = useState([]);
  const regexImg = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
  useEffect(() => {
    async function loadNews() {
      const response = await api.get('/news');
      setNews(response.data.items);
    }

    loadNews();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex style={styles.group}>
            <Text bold size={16} style={styles.title}>
              Últimas Notícias
            </Text>
            <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
              <ScrollView
                horizontal
                pagingEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
                contentContainerStyle={{
                  paddingHorizontal: theme.SIZES.BASE / 2,
                }}
              >
                {news.slice(0, 5).map(article => (
                  <Articles
                    key={article.guid}
                    articleTitle={article.title}
                    articleImage={
                      article.content_encoded._.match(regexImg)
                        ? String(
                            article.content_encoded._.match(regexImg).slice(
                              0,
                              1
                            )
                          )
                        : 'http://placehold.it/400x400'
                    }
                    articleUrl={article.guid}
                    articleDescription={article.description}
                    articleDate={article.pubDate}
                  />
                ))}
              </ScrollView>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </>
  );
}

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
});
