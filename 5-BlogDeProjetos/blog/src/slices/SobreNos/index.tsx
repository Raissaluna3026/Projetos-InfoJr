import { Content } from "@prismicio/client";
import { JSXFunctionSerializer, JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/bounded";
import Heading from "@/components/heading";


const components: JSXMapSerializer = {
  heading2: ({children}) => (
    <Heading
      as="h1"
      size="md"
      className="text-center mb-12">
        {children}
      </Heading>
  )
}

const icons = {
  calendar: <IconeCalendario/>,
  grafico: <IconeGrafico/>,
  trevo: <IconeTrevo/>,
  ampulheta: <IconeAmpulheta/>
}


/**
 * Props for `SobreNos`.
 */
export type SobreNosProps = SliceComponentProps<Content.SobreNosSlice>;

/**
 * Component for "SobreNos" Slices.
 */
const SobreNos = ({ slice }: SobreNosProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    > 
      <PrismicRichText components={components} field={slice.primary.heading} />

      <div>
        {slice.items.map((item, index) => (
          <div key={index}>
            {item.icone && <> {icons[item.icone]}</>}
            <PrismicRichText field={item.titulo} />
            <PrismicRichText field={item.descricao} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default SobreNos;

function IconeCalendario() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeWidth="4.991"
        d="M7.167 40c0-12.57 0-18.856 3.905-22.761 3.905-3.906 10.19-3.906 22.761-3.906h13.334c12.57 0 18.856 0 22.761 3.906 3.905 3.905 3.905 10.19 3.905 22.761v6.667c0 12.57 0 18.856-3.905 22.761-3.905 3.905-10.19 3.905-22.761 3.905H33.833c-12.57 0-18.856 0-22.761-3.905-3.905-3.905-3.905-10.19-3.905-22.761V40z"
      ></path>
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="4.991"
        d="M23.833 13.333v-5m33.334 5v-5M8.833 30h63.334"
      ></path>
      <path
        fill="#0891B2"
        d="M60.5 56.667a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0zm0-13.334a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0zM43.833 56.667a3.333 3.333 0 11-6.666 0 3.333 3.333 0 016.666 0zm0-13.334a3.333 3.333 0 11-6.666 0 3.333 3.333 0 016.666 0zM27.167 56.667a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0zm0-13.334a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0z"
      ></path>
    </svg>
  )};

function IconeGrafico() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeWidth="4.991"
        d="M73.833 73.333H7.167"
      ></path>
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="4.991"
        d="M70.5 73.333v-25a5 5 0 00-5-5h-10a5 5 0 00-5 5v25"
      ></path>
      <path
        stroke="#0891B2"
        strokeWidth="4.991"
        d="M50.5 73.333V16.667c0-4.714 0-7.071-1.465-8.536-1.464-1.464-3.821-1.464-8.535-1.464s-7.071 0-8.535 1.464C30.5 9.596 30.5 11.953 30.5 16.667v56.666"
      ></path>
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="4.991"
        d="M30.5 73.333V31.667a5 5 0 00-5-5h-10a5 5 0 00-5 5v41.666"
      ></path>
    </svg>
)};  

function IconeTrevo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="4.991"
        d="M27.167 26.667h26.666v26.666H27.167V26.667z"
      ></path>
      <path
        stroke="#0891B2"
        strokeWidth="4.991"
        d="M53.833 53.337l10-.002c5.523 0 10.001 4.476 10.002 9.998 0 5.523-4.476 10.001-9.999 10.002-5.522 0-10-4.475-10.001-9.998l-.002-10zm-26.663 0l-10-.002c-5.523 0-10 4.476-10.002 9.998 0 5.523 4.476 10.001 9.999 10.002 5.522 0 10-4.475 10.001-9.998l.002-10zm26.663-26.67l10 .001c5.523.001 10.001-4.475 10.002-9.998 0-5.523-4.476-10-9.999-10.002-5.522 0-10 4.476-10.001 9.999l-.002 10zm-26.663 0l-10 .001c-5.523.001-10-4.475-10.002-9.998 0-5.523 4.476-10 9.999-10.002 5.522 0 10 4.476 10.001 9.999l.002 10z"
      ></path>
    </svg>
)};

function IconeAmpulheta() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeWidth="4.991"
        d="M50.359 30.237L40.499 40l-9.858-9.763c-9.742-9.647-14.612-14.47-13.249-18.632.117-.358.263-.706.435-1.04 2.008-3.898 8.896-3.898 22.673-3.898 13.777 0 20.665 0 22.672 3.897.173.335.319.683.436 1.04 1.363 4.163-3.507 8.986-13.25 18.633z"
      ></path>
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="4.991"
        d="M30.64 49.763L40.5 40l9.859 9.763C60.1 59.41 64.97 64.233 63.608 68.395a7.094 7.094 0 01-.436 1.04c-2.007 3.898-8.895 3.898-22.672 3.898-13.777 0-20.665 0-22.673-3.897a7.104 7.104 0 01-.435-1.041C16.03 64.233 20.9 59.41 30.641 49.763z"
      ></path>
    </svg>
)};
