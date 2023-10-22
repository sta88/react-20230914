import { Button } from "../Button/component";

export const Tab = ({children, isActive, onClick }) => {
  return <Button onClick={onClick}
                disabled={isActive}
                variant={'tabs-button'}>
              {children}
            </Button>
};
