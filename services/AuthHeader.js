export default function authHeader({userToken}) {
  return {
    headers: {
      Authorization: `${userToken.type} ${userToken.token}`,
    },
  };
}