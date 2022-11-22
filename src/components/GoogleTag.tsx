const GoogleTag = () => {
  return (
    <>
      <script
        id="gtm-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-869564557"
      ></script>
      <script id="gtm-push-config">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-869564557');
          `}
      </script>
    </>
  )
}

export default GoogleTag
