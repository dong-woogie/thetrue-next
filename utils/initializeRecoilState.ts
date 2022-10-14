import { MutableSnapshot } from "recoil";
import { rootAtom } from "../states";

const initializeRecoilState =
  (initialRecoilState: any) =>
  ({ set }: MutableSnapshot) => {
    Object.keys(initialRecoilState).forEach((key) => {
      // @ts-ignore
      if (!rootAtom[key]) return;

      // @ts-ignore
      if (initialRecoilState[key].params) {
        set(
          // @ts-ignore
          rootAtom[key](initialRecoilState[key].params),
          initialRecoilState[key].value
        );
      } else {
        // @ts-ignore
        set(rootAtom[key], initialRecoilState[key].value);
      }
    });
  };

export default initializeRecoilState;
