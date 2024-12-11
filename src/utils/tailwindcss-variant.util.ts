const variantGenerator =
  (variant: string, e: any) =>
  ({
    modifySelectors,
    separator,
  }: {
    modifySelectors: any;
    separator: any;
  }) => {
    modifySelectors(({ className }: { className: any }) => {
      return `.${variant} .${e(`${variant}${separator}${className}`)}`;
    });
  };

export default variantGenerator;
