export const GoogleMap = ({ coordinates }) => {
  const { lat, lng } = coordinates;
  const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <iframe
      src={mapUrl}
      title='Ubicación en Google Maps'
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      allowFullScreen
    />
  );
};
