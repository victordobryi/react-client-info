import { AppStateValues } from '../store';
import { ArticlesAction, articlesReducer } from './articlesReducer';
import { CardAction, CardReducer } from './cardReducer';
import { FormAction, formReducer } from './formReducer';
import { AppAction, sortReducer } from './sortReducer';

export const mainReducer = (
  { settings, articles, formData, card }: AppStateValues,
  action: AppAction | ArticlesAction | FormAction | CardAction
) => ({
  settings: sortReducer(settings, action as AppAction),
  articles: articlesReducer(articles, action as ArticlesAction),
  formData: formReducer(formData, action as FormAction),
  card: CardReducer(card, action as CardAction),
});
