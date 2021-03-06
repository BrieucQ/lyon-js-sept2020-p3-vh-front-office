import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './Translation.scss';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  btn: {
    backgroundColor: '#8C0226',
    textTransform: 'none',
    fontSize: '10px',
    height: '20px',
    '&:hover': {
      backgroundColor: '#6d071a',
    },
  },
  '& .MuiButtonGroup-groupedContainedPrimary:not(:last-child)': {
    width: '10px',
  },
}));

const Translation = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const handleClickLanguages = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <section className="translation-button-wrapper">
      <div className="container-btn-trad">
        <ButtonGroup
          className="btn-trad"
          disableElevation
          variant="contained"
          color="primary"
        >
          <Button
            className={classes.btn}
            onClick={() => handleClickLanguages('fr')}
          >
            FR
          </Button>
          <Button
            className={classes.btn}
            onClick={() => handleClickLanguages('en')}
          >
            EN
          </Button>
        </ButtonGroup>
      </div>
      <h1 className="title-test-trad">{t('content.title')}</h1>
    </section>
  );
};

export default Translation;
