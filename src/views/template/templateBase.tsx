export const TemplateBase = ({ children }: any) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=, initial-scale=1.0" />
        <title>Document</title>
        <script src="https://unpkg.com/htmx.org@2.0.0"></script>
      </head>
      <body>{children}</body>
    </html>
  );
};
