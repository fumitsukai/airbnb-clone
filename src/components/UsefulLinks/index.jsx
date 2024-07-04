export function UsefulLinks() {
  const supportLinkNames = [
    "Help Centre",
    "AirCover",
    "Anti-discrimination",
    "Disability support",
    "Cencellation options",
    "Report neighbourhood concern",
  ];
  const supportLinks = supportLinkNames.map((link) => (
    <button className="block">{link}</button>
  ));
  return (
    <>
      <section className="bg-gray-light px-20 pt-6">
        <div className="flex border-b pb-6">
          <div>
            <h3>Support</h3>
            {supportLinks}
          </div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
}
