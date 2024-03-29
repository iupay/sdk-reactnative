import styled from 'styled-components/native';

interface CustomProps {
  color?: string;
  isDue?: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
  style: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.46,
    shadowRadius: 4,
    elevation: 5,
  },
})`
  border-radius: 8px;
  background-color: #ffffff;
  width: 100%;
  flex-direction: row;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.46);
  margin-bottom: -10px;
`;

export const Bar = styled.View<CustomProps>`
  width: 8px;
  height: auto;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: ${(props): string => props.color || '#d71921'};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
`;

export const Content = styled.View`
  flex: 1;
  padding: 15px;
  padding-bottom: 25px;
`;

export const CardRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LogoSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoWrapper = styled.View`
  width: 70px;
  height: 50px;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  max-width: 100%;
  max-height: 100%;
`;

export const CardTitle = styled.Text<{ color?: string }>`
  font-family: 'NunitoSans-SemiBold';
  font-size: 12px;
  color: ${(props) => props.color || '#707070'};
  margin-left: 5px;
`;

export const CardInfo = styled.View`
  display: flex;
  align-items: flex-end;
`;

export const DueDateText = styled.Text<CustomProps>`
  font-family: ${(props): string =>
    props.isDue ? 'NunitoSans-Bold' : 'NunitoSans-SemiBold'};
  font-size: ${(props): string => (props.isDue ? '14px' : '11px')};
  line-height: 17px;
  color: ${(props): string => (props.isDue ? '#e30613' : '#7a7a7b')};
`;

export const ValueText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 14px;
  color: #7a7a7b;
  line-height: 17px;
  text-align: right;
`;

export const PaidText = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  color: #8aa626;
`;

export const UnPaidText = styled(PaidText)`
  color: #e30613;
`;

export const LockedContainer = styled.View`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Shimmer = styled.View<{ size?: string }>`
  height: 12px;
  width: ${(props) => props.size || '50px'};
  background: #7a7a7b;
  opacity: 0.6;
`;
