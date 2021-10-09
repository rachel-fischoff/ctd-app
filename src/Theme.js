import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
  styles: {
    global: {
      textAlign: "center",
    }
  },
    components: {
      Table: {
        variants: {
          mytable: {
            tr: {
              _odd: {
                background: "teal.100"
              }
            }
          }
        }
      }
    }
  });

export default customTheme;