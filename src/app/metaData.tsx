const meataDataInformations: any = {
  home: {
    fa: {
      title: 'شرکت کوریوم',
      description: 'شرکت کوریوم یک شرکت تازه تاسیس است',
    },
    en: {
      title: 'Curium',
      description: 'Curium is a new startup.',
    },
  },
};

export default function MetaData(props: { language: string; page: string }) {
  const { language, page } = props;
  return (
    <>
      <title>{meataDataInformations[page][language].title}</title>
      <meta
        name='description'
        content={`${meataDataInformations[page][language].description}`}
      />
    </>
  );
}
