class Abc {

	public static int area(int l, int b) {
		return l*b;
	}

	public static int volume(int l, int b, int h) {
		return l*b*h;
	}

	public static void main(String[] args) {
		System.out.println("Hello World!");
		System.out.println("Area = " + area(5,4));
		System.out.println("Volume = " + volume(4,5,6));
	}

}